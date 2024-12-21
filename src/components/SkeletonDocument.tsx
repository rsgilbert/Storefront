import { Fieldset, Label } from  "./catalyst/fieldset"
// import { SkeletonInputField } from "./SkeletonInputField"

export default function SkeletonDocument({ fields }: { fields: string[] }) {

    return (
        <form>
            <Fieldset disabled>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {fields.map(field => (
                        <div key={field}>
                            <Label>{field}</Label>
                            {/* <SkeletonInputField /> */}
                        </div>
                    ))}
                </div>
            </Fieldset>
        </form>
    )
}


