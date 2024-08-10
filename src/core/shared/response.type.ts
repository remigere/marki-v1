export type Response<R> =
	| {
			ok: false
			code: string
			message: string
	  }
	| {
			ok: true
			data: R
	  }
