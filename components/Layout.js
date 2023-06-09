import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from 'utils/Store';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import { DropdownLink } from './DropdownLink';
import Cookies from 'js-cookie';
import { useTheme } from 'utils/ThemeContext';
export default function Layout({ title, children }) {
  const { mode, colors } = useTheme();
  const { toggleMode } = useTheme();
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div
        className={`flex min-h-screen flex-col justify-between font-Ozz ${colors[mode].background} transition-colors duration-300 ease-in-out ${colors[mode].text}`}
      >
        <header>
          <nav
            className={`flex h-12 items-center px-4 justify-between shadow-md ${colors[mode].border}`}
          >
            <Link legacyBehavior href="/">
              <a
                className={`text-lg font-bold  dark:text-[#F64668] dark:hover:text-[#be1d3e]`}
              >
                Amazona
              </a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className={`p-2 ${colors[mode].text}`}>
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block font-bold">
                  <Menu.Button className="text-indigo-500">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right dark:bg-white dark:text-zinc-800 rounded   shadow-xl ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link legacyBehavior href="/login">
                  <a className={`p-2 ${colors[mode].text}`}>Login</a>
                </Link>
              )}
              <button className="p-2" onClick={toggleMode}>
                {mode === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 MagnaTech</p>
        </footer>
      </div>
    </>
  );
}
