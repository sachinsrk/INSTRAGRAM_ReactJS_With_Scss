import React, { useContext } from 'react'
import thoughtContext from '../context/thought/thoughtContext'
import ProfilePostGrid from './ProfilePostGrid'

function ProfileTabsContent() {
    const context = useContext(thoughtContext)
    const { activeTab, setActiveTab } = context
    return (
        <>
            {(() => {
                switch (activeTab) {
                    case 'Tab-1':
                        return <ProfilePostGrid />
                    case 'Tab-2':
                        return <h1>hi</h1>;
                    case 'Tab-3':
                        return <h1>hi</h1>;
                    case 'Tab-4':
                        return <h1>hi</h1>;
                    case 'Tab-5':
                        return <h1>hi</h1>;
                    default:
                        return null
                }
            })()}
        </>
    )
}

export default ProfileTabsContent
