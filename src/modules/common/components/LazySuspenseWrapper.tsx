import React from "react";
import { Suspense } from "react";
import { DNA } from 'react-loader-spinner'

const LazySuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={(<div className="place-self-center flex"><DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        
    /></div>)}>
        {children}
    </Suspense>
);

export default LazySuspenseWrapper;