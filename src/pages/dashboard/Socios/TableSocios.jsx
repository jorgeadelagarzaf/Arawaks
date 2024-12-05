import { Kbd, Table, HStack, Badge } from "@chakra-ui/react"
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "../../../components/ui/action-bar"
import { Button } from "../../../components/ui/button"
import { Checkbox } from "../../../components/ui/checkbox"
import { Avatar } from "../../../components/ui/avatar"
import { useState } from "react"
import PopoverSocio from './PopoverSocio';

const TableSocios = () => {
  const [selection, setSelection] = useState([])
  const hasSelection = selection.length > 0
  const indeterminate = hasSelection && selection.length < items.length

  const rows = items.map((item) => (
    <Table.Row key={item.name} data-selected={selection.includes(item.name) ? "" : undefined}>
      <Table.Cell>
        <Checkbox top="1" aria-label="Select row" checked={selection.includes(item.name)}
        onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked ? [...prev, item.name] : selection.filter((name) => name !== item.name),
            )
        }}/>
      </Table.Cell>
      <Table.Cell>
        <HStack gap="2" pl="2"><Avatar name={item.name} size="sm"/><PopoverSocio id={item.id} nombre={item.name} fecha={item.fecha} colegio={item.colegio} asistencia="5" preceptorias="8" cobranza="50"/></HStack>
      </Table.Cell>
      <Table.Cell><Badge colorPalette="green">{item.status}</Badge></Table.Cell>
      <Table.Cell>{item.score}</Table.Cell>
    </Table.Row>
  ))

  return (
    <>
      <Table.Root interactive stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader w="6">
              <Checkbox top="1" aria-label="Select all rows" checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(changes.checked ? items.map((item) => item.name) : [],)}}
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader>Nombre</Table.ColumnHeader>
            <Table.ColumnHeader>Estado</Table.ColumnHeader>
            <Table.ColumnHeader>Puntuación</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Quitar Registro <Kbd>⌫</Kbd>
          </Button>
          <Button variant="outline" size="sm">
            Unir Duplicados <Kbd>T</Kbd>
          </Button>
        </ActionBarContent>
      </ActionBarRoot>
    </>
  )
}

const items = [
  { id: 1, name: "Bernardo de la Cerda", status: "Registrado", score: 7, fecha: "28 de Diciembre, 2010", colegio: "Liceo de Monterrey" },
  { id: 2, name: "Mateo Stoupignan", status: "Registrado", score: 10, fecha: "15 de Febrero, 2010", colegio: "Liceo de Monterrey" },
  { id: 3, name: "Miguel Rojas", status: "Sin Registrar", score: 9, fecha: "24 de Mayo, 2010", colegio: "Liceo de Monterrey" },
  { id: 4, name: "Pablo Echavarría", status: "Sin Registrar", score: 3, fecha: "16 de Octubre, 2010", colegio: "Liceo de Monterrey" },
  { id: 5, name: "Joel Martínez", status: "Invitado", score: 1, fecha: "6 de Enero, 2010", colegio: "Colegio Irlandes" },
]

export default TableSocios;
