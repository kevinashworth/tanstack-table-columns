import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import './Sidebar.css'

// Show nav links as icon with text at all screen sizes.

// For smallest screens: Put menu behind an icon. When icon is clicked, Sidebar
// appears full-width and pushes content down. When a link is clicked, Sidebar
// disappears and content is not pushed down when new page loads. Use a
// Transition to animate Sidebar appearing and disappearing.

interface ItemProps {
  disabled?: boolean
  icon: IconVariant
  path: string
}

function Item({
  disabled = false,
  icon,
  path,
  children
}: PropsWithChildren<ItemProps>) {
  return (
    <li key={path}>
      <NavLink
        to={path}
        className={clsx(
          'flex items-center rounded-lg p-0 font-normal text-white sm:p-2',
          {
            'pointer-events-none opacity-50': disabled
          }
        )}
      >
        <Icon variant={icon} className="shrink-0" />
        <span className="ml-3 text-xs font-bold uppercase tracking-wide">
          {children}
        </span>
      </NavLink>
    </li>
  )
}

function Sidebar() {
  const { pathname } = useLocation()
  const isSmallDevice = useMediaQuery('only screen and (max-width: 639px)')
  const navigate = useNavigate()

  return (
    <div
      className="bg-vibrant dark:bg-burnt shrink grow-0"
      aria-label="Sidebar Navigation Menu"
    >
      <div className="bg-vibrant dark:bg-burnt sticky top-0 flex flex-col overflow-y-auto px-3 pb-4 sm:h-screen sm:translate-x-0 sm:py-4 sm:pb-0">
        <Link
          to="/dashboard"
          className="mb-4 hidden items-center sm:my-4 sm:flex"
        >
          <GotYouYourBusiness className="h-13 w-40 p-2 sm:h-full" />
        </Link>
        <nav>
          <ul className="mt-2 space-y-3 sm:mt-0">
            <Item path="/dashboard" icon="dashboard">
              Dashboard
            </Item>
            <Item path="/customers" icon="customers">
              Customers
            </Item>
            <Item path="/campaigns" icon="campaign">
              Campaigns
            </Item>
            <Item path="/profile" icon="profile">
              Profile
            </Item>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
