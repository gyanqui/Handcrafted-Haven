
export default async function Page(props: { params: Promise<{ id: string }>}) {
    const param = await props.params;
    const id = param.id

return (
    <p> page deploy {id}</p>
)

};