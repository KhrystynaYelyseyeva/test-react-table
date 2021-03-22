import { Cell } from "./Cell";

export const COLUMNS = [
  {
    Header: '- custom CSS -',
    accessor: 'text',
    Cell: ({ cell }) => {
      return (
        <Cell text={ cell.value } />
      )
    }
  },
]
