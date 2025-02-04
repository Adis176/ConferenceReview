import Button from "../../components/Button/Button";
import { StyledInput } from "../../components/Input/Input";
import Grid from '@mui/material/Grid2';
export default function Signup() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
             <Grid container spacing={3} className="flex-col md:flex-row !justify-center !items-center bg-slate-100 w-[95%] sm:w-[80%] min-h-[350px] md:!min-h-[400px] mx-auto border-purple-300 border-solid border-[0.25em] rounded-md p-10">
                <Grid size={{ xs: 12, sm: 9 }} className="">
                    <StyledInput placeholder="Full Name" label="name" />
                </Grid>
                <Grid size={{ sm: 3, lg: 2 }} className="w-full">
                    <Button size="medium" className="w-full">Signup</Button>
                </Grid>
                <div>If you haven't signed up yet, prefer using your institute email, to connect easily with your peers !</div>
            </Grid>
        </div>
    );
}