import Users from "../components/Users";

//Todo lo que hemos creado son componentes de servidor, los handlers son del lado del cliente
export default function HomePage() {
  /* Server */
  return (
    <>
      <section>
        <div>Hello everybody this is the homepage</div>

        <Users /> {/* Cliente */}
      </section>
    </>
  );
}
