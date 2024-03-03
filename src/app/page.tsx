'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const deleteBtn = ()=>{
    confirm("Bạn có muốn xóa sản phẩm không");
    router.push("/");
  }
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Thêm sản phẩm</th>
            <th>Sửa sản phẩm</th>
            <th>Xóa sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="primary">
                <Link href={"/add_product"} className="text-white" style={{textDecoration:"none"}}>
                  Thêm
                </Link>
              </Button>
            </td>
            <td>
              <Button variant="info"><Link href={"/edit_product"} style={{textDecoration:"none"}}>Sửa</Link></Button>
            </td>
            <td>
              <Button variant="danger" onClick={deleteBtn}>
                Xóa
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
