export default function Button({type, content, isMain = false}) {
    return (
        <button type={type} className={`${isMain ? 'bg-primary' : 'bg-transparent'} ${isMain ? 'text-white' : 'text-black'} ${isMain ? '' : 'border-1 border-black'} w-full h-12 px-3 text-center rounded-xl cursor-pointer hover:text-colorForText active:text-colorForText`}>
            {content}
        </button>
    )
}