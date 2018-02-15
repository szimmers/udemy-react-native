import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" >
					<Scene key="login" component={LoginForm} title="Login" initial/>
				</Scene>

				<Scene key="main">
					<Scene
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						rightTitle="Add"
						onRight={() => {console.log('right')}}
					/>

					<Scene key="employeeDetail" component={EmployeeDetail} title="Employee"/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;