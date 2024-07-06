export async function createStudent(name, email, phone, course) {
  const options = {
    methods: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      course: course,
    }),
  };
  const response = await fetch("http://127.0.0.1:8000/api/students", options);
  return response;
}
