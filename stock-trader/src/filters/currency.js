export default function(value) {
    return value ? '$' + value.toLocaleString() : '$0';
}