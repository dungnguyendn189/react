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

export async function createCabins(newCabins) {

    const imageName = `${Math.random()}-${newCabins.image.name}`.replaceAll("/", "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    // https://sraejyantmzxiomgrsae.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

    // create cabins
    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabins, image: imagePath }])

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