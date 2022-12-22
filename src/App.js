import React,{useEffect} from 'react';
import './App.css';
import ProfileScreen from "./screens/ProfileScreen"
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { auth } from './firebase';
import {login, logout, selectUser} from "./features/userSlice"
import { useDispatch, useSelector } from 'react-redux';



function App() {

	const dispatch=useDispatch();

	const user=useSelector(selectUser);

	useEffect(() => {
		const unsubscribe=auth.onAuthStateChanged((authenticatedUser)=>{
			if(authenticatedUser){
				
				dispatch(
					login({
						uid: authenticatedUser.uid,
						email: authenticatedUser.email,
					}),
				);
				
			}else{
				
				dispatch(logout());
			}
		});

		//cleaan up 
		return () => {
			unsubscribe();
		};
	}, [dispatch]);


	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				): (
        			<Switch>
						<Route exact path="/">
		  					<HomeScreen />
						</Route>
						<Route exact path="/profile">
		  					<ProfileScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;