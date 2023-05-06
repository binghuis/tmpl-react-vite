import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

const TopProgress = (props: React.PropsWithChildren) => {
	const { children = null } = props;
	const location = useLocation();

	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, [location]);

	return <>{children}</>;
};

export default TopProgress;
