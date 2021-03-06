import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
import Footer from "../Home/footer";

//Teacher
import TeacherRegistration from "../Teacher/teacherRegistration";
import TeacherProfile from "../Teacher/teacherProfile";
import ViewApprovedTeachers from "../Teacher/viewApprovedTeachers";
import ViewPendingTeachers from "../Supervisor/viewPendingTeachers";
import CreateMaterial from "../Teacher/createMaterial";
import ViewUploadedMaterials from "../Teacher/viewUploadedMaterials";
import supervisorDashboard from "../Supervisor/supervisorDashboard";

import NewPDF from "../Supervisor/basePDF";
import UpdateTeacherProfile from "../Teacher/updateTeacherProfile";

import MyProfile from "../Teacher/myProfile";
import ViewApprovedMaterials from "../Supervisor/viewApprovedMaterials";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>


                        <Route path="/teacher/my/profile" component={MyProfile}/>
                    
                        <Route path="/teacher/profile/update/:id" component={UpdateTeacherProfile}/>
                        <Route path="/teacher/registration" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/teacher/edit-profile" component={UpdateTeacherProfile}/>
                        <Route path="/teacher/view-approved-registration" component={ViewApprovedTeachers}/>
                        <Route path="/teacher/view-approved-materials" component={ViewApprovedMaterials}/>
                        
                        <Route path="/supervisor/view-pending-teachers" component={ViewPendingTeachers}/>
                        <Route path="/teacher/add-course-materials" component={CreateMaterial}/>
                        <Route path="/teacher/view-lesson-materials" component={ViewUploadedMaterials}/>
                        <Route path="/supervisor/report" component={NewPDF}/>
                        <Route path="/supervisor/" component={supervisorDashboard}/>

                    </Switch>
                </section>
            </Router>
            <Footer />
        </div>
    );
}

export default PageRoutes;
