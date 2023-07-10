import { useEffect, useState } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  PaginationTotalStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit"
// import { t } from "i18next"

const { SearchBar } = Search

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange,
}) => (
  <select
    onChange={event => onSizePerPageChange(event.target.value)}
    className=""
  >
    {options.map(option => {
      const isSelect = currSizePerPage === `${option.page}`
      return (
        <option
          key={option.text}
          className={`btn ${isSelect ? "btn-secondary" : ""}`}
        >
          {option.text}
        </option>
      )
    })}
  </select>
)

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    {"Showing rows"} {from} {"to"} {to} {"of"} {size}
  </span>
)

const CustomTable = ({
  keyField,
  data,
  columns,
  totalSize,
  getData,
  search,
}) => {
  const [options, setOptions] = useState({
    custom: true,
    page: 1,
    sizePerPage: 10,
    totalSize: 0,
    sizePerPageRenderer,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
    ],
    searchText: "",
    paginationTotalRenderer: customTotal,
  })

  useEffect(() => {
    setOptions({
      ...options,
      page: 1,
      sizePerPage: 10,
      totalSize,
      paginationTotalRenderer: customTotal,
    })
  }, [totalSize])

  const handleTableChange = (type, { page, sizePerPage }) => {
    if (type === "pagination") {
      setOptions({ ...options, page, sizePerPage })
      getData(page, sizePerPage, options.searchText)
    }
  }

  return (
    <PaginationProvider pagination={paginationFactory(options)}>
      {({ paginationProps, paginationTableProps }) => (
        <div>
          <ToolkitProvider
            keyField={keyField}
            data={data}
            columns={columns}
            search
          >
            {props => (
              <>
                {/* <div className="d-flex justify-content-between"> */}
                <div className="d-flex justify-content-between tblShowEntries">
                  <div>
                    <div className="d-flex">
                      {"Show entries"}: &nbsp;
                      <div>
                        <SizePerPageDropdownStandalone
                          bootstrap4
                          {...paginationProps}
                          onSizePerPageChange={sizePerPage => {
                            // setOptions({ ...options, sizePerPage })
                            // getData(options.page, sizePerPage)
                            setOptions({ ...options, page: 1, sizePerPage })
                            getData(1, sizePerPage, options.searchText)
                          }}
                        />
                      </div>
                    </div>
                    <div className="my-2"></div>
                  </div>
                  <div>
                    {search && (
                      <SearchBar
                        {...props.searchProps}
                        onSearch={searchText => {
                          setOptions({ ...options, page: 1, searchText })
                          getData(1, options.sizePerPage, searchText)
                        }}
                        placeholder={"Search"}
                        searchText={options.searchText}
                      />
                    )}
                  </div>
                </div>
                <BootstrapTable
                  bootstrap4
                  remote
                  // keyField={keyField}
                  // data={data}
                  // columns={columns}
                  {...paginationTableProps}
                  onTableChange={handleTableChange}
                  headerClasses="table-light"
                  bordered={false}
                  noDataIndication={"No matching records found"}
                  {...props.baseProps}
                />
              </>
            )}
          </ToolkitProvider>
          <div className="d-flex justify-content-between">
            <PaginationTotalStandalone bootstrap4 {...paginationProps} />
            <PaginationListStandalone bootstrap4 {...paginationProps} />
          </div>
        </div>
      )}
    </PaginationProvider>
  )
}

export default CustomTable
