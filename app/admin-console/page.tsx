import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      <button className="p-2 shadow text-white bg-black rounded">
        <Link href="/user-profile">User Profile</Link>
      </button>
    </div>
  );
}
