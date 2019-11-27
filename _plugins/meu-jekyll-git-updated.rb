require "fileutils"
require "find"

class JekyllPlugin
	def initialize(post, hash)
		@post = post
		@hash = hash

		@path = post.path
	end

	def setGitUpdated()
		if @post.data['title'] and File.file?(@path)
			@post.data['last_modified_at'] = `git log -n 1 --pretty=format:%ci "#{@path}"`[0...-6]
		end
	end
end

module Jekyll
	Hooks.register [:documents, :pages], :pre_render do |post, hash|
		plugin = JekyllPlugin.new(post, hash)
		plugin.setGitUpdated()
	end
end