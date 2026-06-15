mkdir -Force public/img
$images = @(
  "1920x1080-main-bg.webp",
  "1024x1024_a04.webp",
  "800_w01-thumb.webp",
  "800_w02-thumb.webp",
  "800_w03-thumb.webp",
  "800_w04-thumb.webp",
  "javadev.png",
  "1200x900_s01.webp",
  "1200x900_s03.webp",
  "peng.png",
  "MPFITTDAI.png",
  "Internshala.png",
  "InternCrowd.png",
  "BharatIntern.png",
  "Alpha.png"
)
foreach ($img in $images) {
  $url = "https://snehakarn-potfolio.vercel.app/img/$img"
  $out = "public/img/$img"
  Write-Host "Downloading $url to $out ..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -ErrorAction Stop
  } catch {
    Write-Host "Failed to download $img : $($_.Exception.Message)"
  }
}
