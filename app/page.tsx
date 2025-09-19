'use client'
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Image } from "@heroui/image";
import { button as buttonStyles } from "@heroui/theme";
import {Select, SelectItem} from "@heroui/select";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {

  const alumnos = [
  { matricula: "253220041", nombre: "ARELLANO VILLAGOMEZ AMERICA RUBI" },
  { matricula: "253220026", nombre: "AQUINO LOPEZ VICTOR ANGEL" },
  { matricula: "253220151", nombre: "BARRERA HERNÁNDEZ ALEJANDRA SILEM" },
  { matricula: "253220002", nombre: "BARDALES CALVA JOSE ANDRES" },
  { matricula: "253220033", nombre: "CAMACHO REYES MANUEL ANTONIO" },
  { matricula: "253220094", nombre: "CORTES SPROSS JESUS GERHARD" },
  { matricula: "253220172", nombre: "CRUZ CRUZ HUMBERTO" },
  { matricula: "253220176", nombre: "FERNANDEZ SOLIS ALEJANDRO" },
  { matricula: "253220100", nombre: "FLORES  GARCIA KATHERINE ITZEL" },
  { matricula: "253220167", nombre: "GALVEZ CASTRO EDUARDO" },
  { matricula: "253220022", nombre: "GUTIERREZ RODRIGUEZ ANGELA SAMANTHA" },
  { matricula: "253220027", nombre: "GUTIERREZ SALINAS MANUEL FRANCISCO" },
  { matricula: "253220087", nombre: "HERNANDEZ ANGELES CAIN" },
  { matricula: "253220063", nombre: "HERNÁNDEZ  VIVEROS SAÚL" },
  { matricula: "253220053", nombre: "HURTADO HERNÁNDEZ ALDO IVAN" },
  { matricula: "253220113", nombre: "ISLAS AVILA GACIEL" },
  { matricula: "253220008", nombre: "LARA FLORES ALONZO" },
  { matricula: "253220069", nombre: "LUNA GUTIERREZ JORGE ALFREDO" },
  { matricula: "253220165", nombre: "MARTIN LOPEZ MISAEL" },
  { matricula: "253220112", nombre: "MEJIA REYES BRIAN NOE" },
  { matricula: "253220171", nombre: "MIRANDA ASTORGA MANUEL" },
  { matricula: "253220133", nombre: "MONTOYA CERRO MIGUEL ANGEL" },
  { matricula: "253220003", nombre: "MORALES HERNANDEZ EMMANUEL" },
  { matricula: "253220061", nombre: "MARTÍNEZ  MORALES  EDUARDO TAURINO" },
  { matricula: "253220073", nombre: "NOYOLA MENDOZA ENRIQUE" },
  { matricula: "253220081", nombre: "OAXACA LEÓN LUIS HÉCTOR" },
  { matricula: "253220060", nombre: "OLVERA  GONZÁLEZ  DAVID" },
  { matricula: "253220127", nombre: "PACHECO REYES ALEJANDRO" },
  { matricula: "253220075", nombre: "PEREZ HERNANDEZ PABLO ANTONIO" },
  { matricula: "253220048", nombre: "PEREZ ROMERO JUAN SALVADOR" },
  { matricula: "253220056", nombre: "PEREZ  SEPULVEDA  ERIC MANUEL" },
  { matricula: "253220121", nombre: "RAMOS ANGELES MAURO ALBERTO" },
  { matricula: "253220140", nombre: "ROSAS GARCIA ERIC JONATHAN" },
  { matricula: "253220116", nombre: "ROMERO LORA JESSICA MELANI" },
  { matricula: "253220114", nombre: "ROSAS MEJIA  ALEJANDRO" },
  { matricula: "253220037", nombre: "ROBLES RIVERA FERNANDO" },
  { matricula: "253220020", nombre: "SANTOS MARTINEZ VICTOR MANUEL" },
  { matricula: "253220173", nombre: "SALAZAR ORTIZ RICARDO" },
  { matricula: "253220161", nombre: "SANCHEZ RIOS JOSE LUIS" },
  { matricula: "253220071", nombre: "UVALLE BECERRIL ABRIL ARIADNE" },
  { matricula: "253220072", nombre: "VARGAS BAÑOS EDGAR YAHIR" },
  { matricula: "253220125", nombre: "VELAZQUEZ HERNANDEZ JOSE LUIS" },
  { matricula: "253220031", nombre: "VILLORDO SOLIS JONATHAN" },
  { matricula: "253220180", nombre: "PÉREZ PISCENO JORGE ISRAEL" },
]

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const data = e.target.value.split('-');
    fetch("https://starla-ioi.app.n8n.cloud/webhook/abdb4b43-c8b9-4310-a04f-5b30c8226d71", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "matricula": data[0], "nombre": data[1] }),
    }).then((res) => res.json());
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Image src="/upmh.png" alt="UPMH" width={400} height={120} />
        <br />
        <span className={title()}>Lista de&nbsp;</span>
        <span className={title({ color: "violet" })}>Asistencia&nbsp;</span>
        <br />
      </div>

      <div className="w-lg">
        <Select
          className="max-w-xl"
          color="secondary"
          defaultSelectedKeys={["cat"]}
          label="Lista de nombres"
          placeholder="Selecciona tu nombre"
          onChange={handleChange}
        >
          {alumnos.map((alumno) => (
            <SelectItem key={`${alumno.matricula}-${alumno.nombre}`} name={alumno.nombre}>{alumno.nombre}</SelectItem>
          ))}
        </Select>
      </div>
      <div>&nbsp;</div>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Enviar asistencia
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Ir a <Code color="primary">https://www.upmetropolitana.edu.mx/</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
