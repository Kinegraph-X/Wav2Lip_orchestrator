import os
import zipfile

# Paths
dist_dir = "dist/dist_master"
blacklisted_filenames = ["lightning_rsa", "lightning_rsa.pub", ".env", "Avatar_Small_Local.mp4"]
output_zip = "Chatty_Avatar.zip"

# Create ZIP file while excluding the SSH key
with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            if file in blacklisted_filenames:
                print(f"Excluding {file} from zip.")
                continue  # Skip the SSH key
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, dist_dir)  # Preserve folder structure
            zipf.write(file_path, arcname)

print(f"Created {output_zip} without {blacklisted_filenames}.")
