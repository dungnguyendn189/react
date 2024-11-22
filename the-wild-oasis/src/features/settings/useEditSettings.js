import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting as updateSettingApi } from "../../services/apiSettings"
import toast from "react-hot-toast"

export function useEditSettings() {
    const query = useQueryClient()
    const { mutate: updateSettings, isLoading: isUpdateting } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Settings successfully updated")
            query.invalidateQueries({ queryKey: ["settings"] })
        },
        onError: (err) => toast.error(err.message)
    })
    return { updateSettings, isUpdateting }
}