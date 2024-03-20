export async function login(data: any): Promise<any>{

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to login');
        }

        const result = await response.json();
        console.log(result);

        return result;
    }catch (e:any){
        console.error("Error: ", e.message);
        throw e;
    }
}