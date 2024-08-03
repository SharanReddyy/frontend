"use client";
import withAuth from '../../utils/withAuth';

function ProtectedPage() {
    return <h1>This is a protected page</h1>;
}

export default withAuth(ProtectedPage);
