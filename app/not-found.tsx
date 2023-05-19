import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <p className="text-6xl text-center ">Dummy Page</p>
      <Link href="/">
        <button className="shadow bg-gray-100 rounded-sm p-2">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
