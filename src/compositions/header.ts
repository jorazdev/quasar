import { ref } from "vue"

interface Item {
    id: number
    icon: string
    label: string
    caption: string
    href: string
}

const useHeader = (): any => {
    
    const items = ref<Item[]>([
        {id: 1, icon: 'school', label: 'Docs', caption: 'quasar.dev', href: 'https://quasar.dev'},
        {id: 2, icon: 'code', label: 'Github', caption: 'github.com/quasarframework', href: 'https://github.com/quasarframework'},
        {id: 3, icon: 'chat', label: 'Discord Chat Channel', caption: 'chat.quasar.dev', href: 'https://chat.quasar.dev'},
        {id: 4, icon: 'forum', label: 'Forum', caption: 'forum.quasar.dev', href: 'https://forum.quasar.dev'},
        {id: 5, icon: 'rss_feed', label: 'Twitter', caption: '@quasarframework', href: 'https://twitter.com/quasarframework'},
    ])
    
    return { items }
}

export default useHeader