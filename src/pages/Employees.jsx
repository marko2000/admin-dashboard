import React from 'react'
import { 
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Page,
  Inject, 
  Search 
} from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'

import { Header } from '../components'

const Employees = () => {
  const toolbarOptions = ['Search']
  const editing = { allowDeleting: true, allowEditing: true }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl'>
      <Header category="Page" title="Employees" />
      <GridComponent 
        dataSource={employeesData} 
        allowPaging 
        allowSorting 
        toolbar={toolbarOptions} 
        editSettings={editing} 
        pageSettings={{ 
          pageCount: 5 
        }} 
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>
  )
}

export default Employees