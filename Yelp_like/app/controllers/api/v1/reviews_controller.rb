module Api
  module V1
    class ReviewsController < ApiController
      #protect_from_forgery with :null_session
     
      # POST /api/v1/reviews
      def create
        #review = Review.reviews.new(review_params)
        review = Review.new(
          title: params[:title],
          description: params[:description],
          score: params[:score],
          restaurant_id: params[:restaurant_id],
          user_id: session[:user_id]
        )

        if review.save!
          #render json: ReviewSerializer.new(reviews).serializer_json
          render json: { status: :success, logged_in: true }, status: 200
        else
          render json:{error:["could not save review"]}, status: 422
        end
      end

      # DELETE /api/v1/reviews/:id
      def destroy
    
         review = Review.find(params[:id])
         if review.destroy
           
            head :no_content
          else
            render json:{error:restaurant.error.messages}, status: 422
          end
        end

      private

      # Strong params
      def review_params
        params.require(:review).permit(:title, :description, :score, :restaurant_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        puts "here"
         RestaurantSerializer
         .new(@records, @options)
         .serialized_json
     end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end