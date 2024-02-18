"use client";

import { logout } from "@/app/api/actions";

export default function Page() {
  return (
    <div>
      <button
        onClick={async () => {
          await logout();
          location.reload();
        }}
      >
        Logout
      </button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
