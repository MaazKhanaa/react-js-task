// import { connect, ConnectedProps } from 'react-redux';
// import { RootState } from '../../../store';
// // import { RootState } from '../store/store';
// // import { signup } from '../store/auth/authSlice';
// // import SignupForm from '../components/SignupForm';

// type RootStateProps = {
//     isLoading: boolean;
//     error: string | null;
// };

// type DispatchProps = {
//     signup: (userData: { username: string; email: string; password: string }) => void;
// };

// const mapStateToProps = (state: RootState): RootStateProps => {
//     return {
//         isLoading: state.auth.isLoading,
//         error: state.auth.error,
//     };
// };

// const mapDispatchToProps: DispatchProps = {
//     signup,
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

// type SignupFormContainerProps = PropsFromRedux;

// const SignupFormContainer = (props: SignupFormContainerProps) => {
//     const { isLoading, error, signup } = props;

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignup = () => {
//         signup({ username, email, password });
//     };

//     return (
//         <SignupFormContainer
//             isLoading={isLoading}
//             error={error}
//             username={username}
//             email={email}
//             password={password}
//             setUsername={setUsername}
//             setEmail={setEmail}
//             setPassword={setPassword}
//             handleSignup={handleSignup}
//         />
//     );
// };

// export default connector(SignupFormContainer);


export { }