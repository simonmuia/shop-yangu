"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold'>Welcome to ShopYangu Admin Panel</h1>
      <nav className='mt-4'>
        <ul className='space-y-2'>
          <li>
            <Link href='/shops' className='text-blue-500 hover:underline'>
              Manage Shops
            </Link>
          </li>
          <li>
            <Link href='/products' className='text-blue-500 hover:underline'>
              Manage Products
            </Link>
          </li>
          <li>
            <Link href='/dashboard' className='text-blue-500 hover:underline'>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
