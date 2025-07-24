import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const buttonHandler = async (e) => {
  e.preventDefault();

  const element = document.querySelector(".resume-content");

  const previousTransition = element.style.transition;
  const previousTransform = element.style.transform;

  element.style.transform = "none";
  element.style.transition = "none";

  const canvas = await html2canvas(element, {
    width: 595,
    height: 842,
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    unit: "px",
    format: [595, 842],
  });

  element.style.transform = previousTransform;
  element.style.transition = previousTransition;

  pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
  pdf.save("resume.pdf");
};
