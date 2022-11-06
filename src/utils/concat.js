export default function concat(...classes) {
    return classes.filter(Boolean).join(' ')
}