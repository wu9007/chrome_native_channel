import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

/**
 * @author wujianchuan
 */
public class Printer {
    public static void main(String[] args) throws IOException {

        ByteBuffer b = ByteBuffer.allocate(4);
        b.putInt(1010);
        byte[] receive = b.array();

        StringBuilder stringBuilder = new StringBuilder("成功执行本地程序");
        stringBuilder.append(" 接收到的数据-----")
                .append(new String(receive, StandardCharsets.UTF_8));
        String str = stringBuilder.toString();
        System.out.println(stringBuilder.toString());

        OutputStream out = new FileOutputStream("F:\\2.txt");
        out.write(str.getBytes());
    }
}
