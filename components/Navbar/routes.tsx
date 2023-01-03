import { SearchOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons'

export const menuItems = [
    {
        key: 'Profile',
        icon: <UserOutlined />,
        label: 'Profile',
        url: '/profile/'
    },
    {
        key: 'Search',
        icon: <SearchOutlined />,
        label: 'Search',
        url: '/'
    },
    {
        key: 'Chats',
        icon: <MessageOutlined />,
        label: 'Chats',
        url: '/chats/'
    }
]