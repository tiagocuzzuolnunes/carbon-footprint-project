export default function Button({type, content, isMain = false}) {
    return (
        <button type={type} className={`${isMain ? 'bg-primary' : 'bg-transparent'} ${isMain ? 'text-white' : 'text-black'} ${isMain ? '' : 'border-1 border-black'} w-full h-12 mb-3 text-center rounded-xl`}>
            {content}
        </button>
    )
}