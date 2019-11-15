import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

/**
 * @author wujianchuan
 */
public class Printer {

    void print() throws IOException {
        String message = this.readMessage();
        OutputStream out = new FileOutputStream("F:\\2.txt");
        out.write(message.getBytes());
    }

    private String readMessage() throws IOException {
        InputStream in = System.in;
        byte[] b = new byte[4];
        in.read(b);
        int size = getInt(b);
        if (size == 0) {
            throw new InterruptedIOException("Blocked communication");
        }
        b = new byte[size];
        in.read(b);
        return new String(b, StandardCharsets.UTF_8);
    }

    private int getInt(byte[] bytes) {
        return (bytes[3] << 24) & 0xff000000 | (bytes[2] << 16) & 0x00ff0000
                | (bytes[1] << 8) & 0x0000ff00 | (bytes[0]) & 0x000000ff;
    }
}
