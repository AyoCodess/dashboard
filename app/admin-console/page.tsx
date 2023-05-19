'use client';
import { useOrganizationList } from '@clerk/nextjs';
import { useOrganization } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@clerk/nextjs';
export default async function page() {
  const { user } = useUser();
  const { organizationList, isLoaded } = useOrganizationList();

  const permissions = user?.publicMetadata.Permissions as [string];

  return (
    <div className="flex flex-col w-full">
      <div>
        <main>
          <div>
            <button className="p-2 shadow text-white bg-black rounded  w-32 ml-auto">
              <Link href="/user-profile">User Profile</Link>
            </button>
            <h2 className="mt-10 text-2xl mb-2">Your organizations</h2>
            {organizationList?.length === 0 ? (
              <div>You do not belong to any organizations yet.</div>
            ) : (
              <ul>
                {organizationList?.map(({ organization }) => (
                  <li
                    key={organization.id}
                    className="text-lg shadow p-2 w-32 text-center"
                  >
                    <Link href={`/organizations/${organization.id}`}>
                      {organization.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <section className="mt-10">
            <h2 className="text-2xl">User Permissions </h2>
            {permissions &&
              permissions.map((permission, index) => (
                <p key={index}>- {permission}</p>
              ))}
          </section>
        </main>
      </div>
    </div>
  );
}
