export async function getAllAdmins(){
    try {
        const response = await fetch('http://localhost:4300/pesalock/v1/admin/users');

        if (!response.ok){
            throw new Error('Error in fetching data');
        }

        return await response.json();
    }catch (e:any){
        console.error("Error: ", e.message);
        throw e;
    }
}