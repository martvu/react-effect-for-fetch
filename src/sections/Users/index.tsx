import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import useFetchData from "../../hooks/useFetchData";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  jobTitle: string;
  street: string;
  city: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
}

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/martvu/contact";
  const { data } = useFetchData<Contact[]>(url, []);

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList userData={data} />
    </section>
  );
}

export default UsersSection;
