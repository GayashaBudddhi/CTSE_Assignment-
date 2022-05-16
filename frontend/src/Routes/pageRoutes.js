import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
import Footer from "../Home/footer";

//Student
import AddStudentPayment from "../Student/Payments/addStudentPayment";
import ViewStudentPayments from "../Student/Payments/viewStudentPayments";
import UpdateStudentPayment from "../Student/Payments/updateStudentPayment";
import LoadingScreen from "../Student/Payments/style/loadingScreen";

//Manager
import CompanyTransactionOneAtTime from "../Accountant/companyTransactionOneAtTime";
import AccountantDashboard from "../Accountant/dashboard";
import ViewStudentPayment from "../Accountant/viewStudentPayment";
import AddCompanyPayment from "../Accountant/addTransactions";
import UpdateCompanyPayment from "../Accountant/updateTransactions";
import ViewIncomeTransaction from "../Accountant/viewIncomeTransactions";
import ViewOutcomeTransaction from "../Accountant/viewOutcomeTransaction";
import AccountantCalender from "../Accountant/calender";
import ReactPDF from "../Accountant/reportPDF";

//Teacher
import TeacherRegistration from "../Teacher/teacherRegistration";
import TeacherProfile from "../Teacher/teacherProfile";
import ViewTeacherRegistration from "../Supervisor/viewTeacherRegistration";
import ViewProfile from "../Teacher/viewProfile";
import ViewApprovedTeachers from "../Teacher/viewApprovedTeachers";
import RegistrationCompletion from "../Teacher/registrationCompletion";
import ViewPendingTeachers from "../Supervisor/viewPendingTeachers";
import CreateMaterial from "../Teacher/createMaterial";
import ViewUploadedMaterials from "../Teacher/viewUploadedMaterials";
import supervisorDashboard from "../Supervisor/supervisorDashboard";

import NewPDF from "../Supervisor/basePDF";
import UpdateTeacherProfile from "../Teacher/updateTeacherProfile";

import MyProfile from "../Teacher/myProfile";
import UpdatedProfile from "../Teacher/updatedProfile";
import ViewApprovedMaterials from "../Supervisor/viewApprovedMaterials";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/student/payment/update/:id" component={UpdateStudentPayment}/>
                        <Route path="/student/add-payment" component={AddStudentPayment}/>
                        <Route path="/student/payment" component={ViewStudentPayments}/>
                        <Route path="/alert" component={LoadingScreen}/>

                        <Route path="/accountant/company-payment-incomes/view/:id" component={CompanyTransactionOneAtTime}/>
                        <Route path="/accountant/company-payment-incomes" component={ViewIncomeTransaction}/>
                        <Route path="/accountant/company-payment-expenses" component={ViewOutcomeTransaction}/>
                        <Route path="/accountant/update-payment/:id" component={UpdateCompanyPayment}/>
                        <Route path="/accountant/add-payment" component={AddCompanyPayment}/>
                        <Route path="/accountant/student-payment" component={ViewStudentPayment}/>
                        <Route path="/accountant/calender" component={AccountantCalender}/>
                        <Route path="/accountant/report" component={ReactPDF}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>


                        <Route path="/teacher/my/profile" component={MyProfile}/>
                        <Route path="/teacher/updated-profile" component={UpdatedProfile}/>
                        <Route path="/teacher/profile/update/:id" component={UpdateTeacherProfile}/>
                        <Route path="/teacher/registration" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/teacher/edit-profile" component={UpdateTeacherProfile}/>
                        <Route path="/teacher/view-registration" component={ViewTeacherRegistration}/>
                        <Route path="/teacher/view-profile" component={ViewProfile}/>
                        <Route path="/teacher/view-approved-registration" component={ViewApprovedTeachers}/>
                        <Route path="/teacher/view-approved-materials" component={ViewApprovedMaterials}/>
                        <Route path="/teacher/complete-registration" component={RegistrationCompletion}/>
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
