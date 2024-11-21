import supabase, { supabaseUrl } from "./supabase"

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }
    return data
}

export async function createEditCabins(newCabins, id) {
    console.log(newCabins, id)

    const hasImagePath = newCabins.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabins.image.name}`.replaceAll("/", "")
    const imagePath = hasImagePath ? newCabins.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    // https://sraejyantmzxiomgrsae.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

    // create/edit cabins
    let query = supabase.from('cabins')
    //create a new Cabin
    if (!id) query = query.insert([{ ...newCabins, image: imagePath }])
    //edit an existing Cabin
    if (id) query = query.update({ ...newCabins, image: imagePath })
        .eq("id", id)


    const { data, error } = await query.select().single();

    if (error) {
        console.log(error)
        throw new Error('Cabins could not be created')
    }

    //upload images

    const { error: storageError } = await supabase.storage
        .from('cabin-images')
        .upload(imageName, newCabins.image)


    //3. Delete the cabin if there was an error uploading image

    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data.id)
        console.log(storageError)
        throw new Error('Cabins could not be uploaded and the cabin was not created')
    }

    return data

}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error)
        throw new Error('Cabins could not be deleted')

    }
    return data
}