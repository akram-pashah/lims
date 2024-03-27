import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { ConfirmDeletion } from "../components/AlertMessage/AlertMessage";
import React, { useEffect, useState } from "react";
import GridData from "../components/Grid/Grid";
import MuiModules from "../MUI-Module/MuiImports";
import SpinnerLoader from "../SpinnerLoader";
import { useNavigate } from "react-router-dom";
import { User } from "../Type/User";

const Home = () => {
    const navigate = useNavigate();
    const [spinnerL, setSpinnerL] = useState(false);

    const users: User[] = [
        {
            Id: 1,
            Name: "User 1",
            Email: "user1@gmail.com",
            Role: "Requester"
        },
        {
            Id: 2,
            Name: "User 2",
            Email: "user2@gmail.com",
            Role: "Lab Super User"
        },
        {
            Id: 3,
            Name: "User 3",
            Email: "user3@gmail.com",
            Role: "Lab In-charge"
        },
        {
            Id: 4,
            Name: "User 4",
            Email: "user4@gmail.com",
            Role: "Lab Technician"
        }
    ];

    const columns: GridColDef[] = [
        { field: 'Id', headerName: 'User Id', width: 120 },
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'Email', headerName: 'Email', width: 150 },
        { field: 'Role', headerName: 'Role', width: 150 },
        {
            field: "actions",
            headerName: "Action",
            type: "actions",
            width: 100,
            getActions: (params) => {
                const actions = [];
                actions.push(
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => {
                            deleteConfirm(params.id, params.row.Name);
                        }}
                    />
                );
                actions.push(
                    <GridActionsCellItem
                        icon={<ReadMoreIcon />}
                        label="Read More"
                        onClick={edit(params.id)}
                    />
                );
                return actions;
            },
        },
    ];

    const handleAddClick = () => {
        navigate("/navigate-to-add-page");
    };

    const deleteConfirm = (id: any, name: any) => {
        ConfirmDeletion(`Are you sure you want to delete ${name}`, () => {
            // delete logic goes here
        });
    };

    const edit = React.useCallback(
        (id: GridRowId) => () => {
            handleEditClick(id);
        },
        []
    );

    const handleEditClick = (id: GridRowId) => {
        console.log(id);
        // edit logic goes here to navigate to edit page
    };

    useEffect(() => {
        // fetch the initial data here
        setTimeout(() => {
            setSpinnerL(true);
        }, 2000);
    }, []);

    return (
        <div className="content">
            {spinnerL ? (
                <MuiModules.UIBox sx={{ height: 400, width: "100%" }}>
                    <MuiModules.UITypography
                        component="h1"
                        variant="h5"
                        style={{ marginTop: "10px", marginLeft: "15px" }}
                    >
                        Welcome
                    </MuiModules.UITypography>
                    <MuiModules.UIButton
                        variant="contained"
                        style={{ marginTop: "10px", marginLeft: "15px" }}
                        onClick={handleAddClick}
                    >
                        Add
                    </MuiModules.UIButton>
                    <GridData rows={users} columns={columns} />
                </MuiModules.UIBox>
            ) : (
                <SpinnerLoader />
            )}
        </div>
    );
};

export default Home;