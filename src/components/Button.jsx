export default function Button(type, content, isMain = false) {
    return (
        <button type={type} className={`${isMain ? 'bg-primary' : 'bg-transparent'} w-full h-24 text-center rounded-xl`}>
            {content}
        </button>
    )
}