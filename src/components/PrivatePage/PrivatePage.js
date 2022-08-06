import WithoutPermission from "../WithoutPermission/WithoutPermission";

export default function PrivatePage({children}){

    const auth = JSON.parse(localStorage.getItem('trackit'));

    if(auth) {
        return <>{children}</>;
    }else{
        return <WithoutPermission></WithoutPermission>;
    }
}