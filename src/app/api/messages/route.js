export async function POST(request) {
  try {
    const body = await request.json();
    
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000';
    console.log('Server URL being used:', serverUrl);
    console.log('Request body:', body);
    
    const response = await fetch(`${serverUrl}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    
    if (!response.ok) {
      return Response.json(
        { success: false, error: data.error || 'Failed to send message' },
        { status: response.status }
      );
    }
    
    return Response.json(data);
  } catch (error) {
    console.error('Error in messages API route:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}