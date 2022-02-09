import React from "react";
import * as layouts from "./layouts";

import CommonActionModal from "../Common/Modals/CommonActionModal";

import CommonImportModal from "../Common/Modals/CommonImportModal";

import DeleteModal from "../Common/Modals/CommonDeleteModal";

import AddCommonAction from "../Common/Actions/AddCommonAction";
import EditCommonAction from "../Common/Actions/EditAction";
import DeleteCommonAction from "../Common/Actions/DeleteCommonAction";
import ViewCommonAction from "../Common/Actions/ViewCommonAction";
import ImportCommonAction from "../Common/Actions/ImportCommonAction";

import { useDispatch } from "react-redux";
import PageTitle from "./PageTtitle";

const initState = {
  openCommonModal: undefined,
  actionData: {},
};
const PageCreator = ({
  title,
  layout = "tabular",
  formData,
  tableHeaders,
  tableData,
  searchByField,
  searchByLabel,
  initialTableRows = 5,

  sortable = false,

  paginated = true,

  enableImport = false,
  importHeaders = [],
  modalSize = "md",
  importData = [],
  fullScreen,
  hideEdit,
  hideDelete,
  hideAdd,
  hideView,
  tableRowActions = [],
  pageHeaderActions = [],
  watchFields = [],
  onWatchChange = () => { },

  defaultFormValues = {},
  deleteVariableTitle = undefined,
  onAdd = () => { },
  onEdit = () => { },
  onDelete = () => { },
  onImport = () => { },

  getData,
  getImportData = () => { },
  afterAddSuccess = () => { },
  afterEditSuccess = () => { },
  afterDeleteSuccess = () => { },
  afterImportSuccess = () => { },
}) => {
  const dispatch = useDispatch();

  const Layout = layouts[layout];

  const [state, setState] = React.useState(initState);

  const [importOpen, setImportOpen] = React.useState();

  const getInitData = () => {
    dispatch(getData());
  };

  const handleRowActionClick = (mode, data) => {
    setState({
      ...state,
      openCommonModal: mode,
      actionData: data,
    });
  };

  const ImportAction = () => {
    return (
      <ImportCommonAction
        onClick={() => {
          enableImport && getImportData();

          setImportOpen(true);
        }}
        title={title}
      />
    );
  };

  const AddAction = () => {
    return (
      <AddCommonAction
        onClick={() => handleRowActionClick("add", defaultFormValues)}
        title={title}
      />
    );
  };

  const EditAction = (action) => (
    <EditCommonAction
      onClick={() => handleRowActionClick("edit", action.data)}
    />
  );

  const DeleteAction = (action) => (
    <DeleteCommonAction
      onClick={() => handleRowActionClick("delete", action.data)}
    />
  );

  const ViewAction = (action) => (
    <ViewCommonAction
      onClick={() => handleRowActionClick("view", action.data)}
    />
  );

  const closeModal = () => {
    setState(initState);
  };

  const onModalSubmit = (values) => {
    const mode = state.openCommonModal;
    if (mode === "add") {
      console.log('onModalSubmit', defaultFormValues);

      dispatch(
        onAdd({ ...defaultFormValues, ...state.actionData, ...values }, () => {
          closeModal();
          afterAddSuccess && afterAddSuccess();
          getInitData();
        })
      );
    }

    if (mode === "edit") {
      dispatch(
        onEdit({ ...defaultFormValues, ...state.actionData, ...values }, () => {
          closeModal();
          getInitData();

          afterEditSuccess && afterEditSuccess();
        })
      );
    }

    if (mode === "import") {
      dispatch(
        onImport(values, () => {
          closeModal();
          afterImportSuccess && afterImportSuccess();
          getInitData();
        })
      );
    }
  };

  const onDeleteSubmit = () => {
    dispatch(
      onDelete({ ...defaultFormValues, ...state.actionData }, () => {
        closeModal();
        afterDeleteSuccess && afterDeleteSuccess();
        getInitData();
      })
    );
  };

  const rowActions = [
    ...(!hideEdit ? [EditAction] : []),
    // ...(!hideView ? [ViewAction] : []),

    ...(!hideDelete ? [DeleteAction] : []),
    ...tableRowActions,

  ];

  const tableHeaderComponents = [
    ...(enableImport ? [ImportAction] : []),
    ...pageHeaderActions,
  ];

  React.useEffect(() => {
    dispatch(getData());
    enableImport && getImportData();
  }, []);
  return (
    <div>
      {title && (
        <PageTitle
          headerComponents={tableHeaderComponents}
          title={title}
          endAction={AddAction}
        />
      )}
      {enableImport && (
        <CommonImportModal
          headers={importHeaders}
          open={importOpen}
          title={title}
          data={importData}
          onClose={() => {
            setImportOpen(false);
          }}
          onSubmit={(data) => {
            onImport(data);
          }}
        />
      )}
      {formData && (
        <CommonActionModal
          formData={formData}
          title={title}
          open={["add", "edit"].includes(state.openCommonModal)}
          onClose={() => closeModal()}
          mode={state.openCommonModal}
          onSubmit={(e) => onModalSubmit(e)}
          data={state.actionData}
          size={modalSize}
          fullScreen={fullScreen}
          watchFields={watchFields}
          onWatchChange={onWatchChange}
          // data={defaultFormValues}
          defaultValues={defaultFormValues}
        />
      )}

      <DeleteModal
        size="md"
        open={["delete"].includes(state.openCommonModal)}
        title={deleteVariableTitle && state?.actionData[deleteVariableTitle]}
        onClose={() => closeModal()}
        onConfirm={() => onDeleteSubmit()}
      />
      <Layout
        tableTitle={title}
        headerComponents={tableHeaderComponents}
        actions={rowActions}
        tableData={tableData}
        header={tableHeaders}
        sortable={sortable}
        paginated={paginated}
        searchByLabel={searchByLabel}
        searchByField={searchByField}
        rowsPerPage={initialTableRows}
      />
    </div>
  );
};

export default PageCreator;
