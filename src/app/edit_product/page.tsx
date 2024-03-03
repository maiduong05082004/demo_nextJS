'use client'
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
const EditProduct=()=>{
    const router=useRouter();
    const backHome=()=>{
        router.push("/");
    }
  return(
    <div>
        <div>Đây là trang sửa sản phẩm</div>
        <Button onClick={backHome}>Quay về trang chủ</Button>
  </div>
  )
}
  export default EditProduct;

