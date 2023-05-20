'use client';
import { useOrganizationList } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@clerk/nextjs';
export default function page() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { organizationList, isLoaded } = useOrganizationList();

  const permissions = user?.publicMetadata.Permissions as [string];

  console.log(isLoaded, isUserLoaded, organizationList, permissions);

  return (
    <div className="flex flex-col w-full">
      <div>
        <main>
          <div>
            <button className="p-2 shadow text-white bg-black rounded  w-32 ml-auto">
              <Link href="/user-profile">User Profile</Link>
            </button>
            <h2 className="mt-10 text-2xl">Your organizations</h2>
            {!isLoaded && <div>Loading...</div>}
            {organizationList?.length === 0 ? (
              <div>You do not belong to any organizations yet.</div>
            ) : (
              <ul>
                {organizationList?.map(({ organization }) => (
                  <li key={organization.id}>- {organization.name}</li>
                ))}
              </ul>
            )}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl">User Permissions </h2>
            {!isUserLoaded && <div>Loading...</div>}
            {permissions &&
              permissions.map((permission, index) => (
                <p key={index}>- {permission}</p>
              ))}
            {!permissions && isUserLoaded && <p>You have no permissions</p>}
          </section>
        </main>
      </div>
    </div>
  );
}
