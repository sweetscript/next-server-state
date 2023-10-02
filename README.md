# Next-Server-State

> :warning: Experimental

This package is a **work-in-progress** project to test best approaches for seamlessly sharing state between Server and Client components in Next.js app router. Contributions and suggestions are welcome :pray: .


## Implementation Idea 2:

```ts
type MyServerStateProps = {
	...
}

const myServerState = createServerState<MyServerStateProps>(
	'unique_key',
	{
		// defaultValues
	}, 
	{
		presist: true,
		sessionOptions: {
			// next-app-session options
		}
	}
);

export function useMyServerState(){
	useServerState();
}

```